# ListCarriersResponseBody

A carrier list response body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**carriers** | [**List[Carrier]**](Carrier.md) | The carrier response body | [readonly] 

## Example

```python
from openapi_client.models.list_carriers_response_body import ListCarriersResponseBody

# TODO update the JSON string below
json = "{}"
# create an instance of ListCarriersResponseBody from a JSON string
list_carriers_response_body_instance = ListCarriersResponseBody.from_json(json)
# print the JSON string representation of the object
print(ListCarriersResponseBody.to_json())

# convert the object into a dict
list_carriers_response_body_dict = list_carriers_response_body_instance.to_dict()
# create an instance of ListCarriersResponseBody from a dict
list_carriers_response_body_from_dict = ListCarriersResponseBody.from_dict(list_carriers_response_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


