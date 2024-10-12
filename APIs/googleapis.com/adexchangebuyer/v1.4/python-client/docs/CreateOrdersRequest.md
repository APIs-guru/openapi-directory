# CreateOrdersRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**proposals** | [**List[Proposal]**](Proposal.md) | The list of proposals to create. | [optional] 
**web_property_code** | **str** | Web property id of the seller creating these orders | [optional] 

## Example

```python
from openapi_client.models.create_orders_request import CreateOrdersRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateOrdersRequest from a JSON string
create_orders_request_instance = CreateOrdersRequest.from_json(json)
# print the JSON string representation of the object
print(CreateOrdersRequest.to_json())

# convert the object into a dict
create_orders_request_dict = create_orders_request_instance.to_dict()
# create an instance of CreateOrdersRequest from a dict
create_orders_request_from_dict = CreateOrdersRequest.from_dict(create_orders_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


