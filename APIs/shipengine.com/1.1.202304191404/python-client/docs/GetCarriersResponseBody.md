# GetCarriersResponseBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**carriers** | [**List[Carrier]**](Carrier.md) | The carrier response body | [readonly] 
**errors** | [**List[Error]**](Error.md) | The errors associated with the failed API call | [readonly] 
**request_id** | **str** | A UUID that uniquely identifies the request id. This can be given to the support team to help debug non-trivial issues that may occur  | 

## Example

```python
from openapi_client.models.get_carriers_response_body import GetCarriersResponseBody

# TODO update the JSON string below
json = "{}"
# create an instance of GetCarriersResponseBody from a JSON string
get_carriers_response_body_instance = GetCarriersResponseBody.from_json(json)
# print the JSON string representation of the object
print(GetCarriersResponseBody.to_json())

# convert the object into a dict
get_carriers_response_body_dict = get_carriers_response_body_instance.to_dict()
# create an instance of GetCarriersResponseBody from a dict
get_carriers_response_body_from_dict = GetCarriersResponseBody.from_dict(get_carriers_response_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


