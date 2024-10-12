# RequestRelationsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ids** | **List[str]** | Specifies an array of shipment and/or service ids that are in relation. If you deal with services then you need to use the id of your services in ids. To also consider sequences of the pickups and deliveries of your shipments, you need to use a special ID, i.e. use your shipment id plus the keyword &#x60;_pickup&#x60; or &#x60;_delivery&#x60;. If you want to place a service or shipment activity at the beginning of your route, use the special ID &#x60;start&#x60;. In turn, use &#x60;end&#x60; to place it at the end of the route. | 
**type** | **str** | Specifies the type of relation. It must be either of type &#x60;in_sequence&#x60; or &#x60;in_direct_sequence&#x60;.  | 
**vehicle_id** | **str** | Id of pre-assigned vehicle, i.e. the vehicle id that is determined to conduct the services and shipments in this relation. | [optional] 
**groups** | **List[str]** | An array of groups that should be related | 

## Example

```python
from openapi_client.models.request_relations_inner import RequestRelationsInner

# TODO update the JSON string below
json = "{}"
# create an instance of RequestRelationsInner from a JSON string
request_relations_inner_instance = RequestRelationsInner.from_json(json)
# print the JSON string representation of the object
print(RequestRelationsInner.to_json())

# convert the object into a dict
request_relations_inner_dict = request_relations_inner_instance.to_dict()
# create an instance of RequestRelationsInner from a dict
request_relations_inner_from_dict = RequestRelationsInner.from_dict(request_relations_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


