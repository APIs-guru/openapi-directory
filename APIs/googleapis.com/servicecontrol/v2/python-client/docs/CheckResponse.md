# CheckResponse

Response message for the Check method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**headers** | **Dict[str, str]** | Returns a set of request contexts generated from the &#x60;CheckRequest&#x60;. | [optional] 
**status** | [**Status**](Status.md) |  | [optional] 

## Example

```python
from openapi_client.models.check_response import CheckResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CheckResponse from a JSON string
check_response_instance = CheckResponse.from_json(json)
# print the JSON string representation of the object
print(CheckResponse.to_json())

# convert the object into a dict
check_response_dict = check_response_instance.to_dict()
# create an instance of CheckResponse from a dict
check_response_from_dict = CheckResponse.from_dict(check_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


