# CloseMatterResponse

Response to a CloseMatterRequest.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**matter** | [**Matter**](Matter.md) |  | [optional] 

## Example

```python
from openapi_client.models.close_matter_response import CloseMatterResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CloseMatterResponse from a JSON string
close_matter_response_instance = CloseMatterResponse.from_json(json)
# print the JSON string representation of the object
print(CloseMatterResponse.to_json())

# convert the object into a dict
close_matter_response_dict = close_matter_response_instance.to_dict()
# create an instance of CloseMatterResponse from a dict
close_matter_response_from_dict = CloseMatterResponse.from_dict(close_matter_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


