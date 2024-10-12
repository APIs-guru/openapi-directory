# ReopenMatterResponse

Response to a ReopenMatterRequest.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**matter** | [**Matter**](Matter.md) |  | [optional] 

## Example

```python
from openapi_client.models.reopen_matter_response import ReopenMatterResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ReopenMatterResponse from a JSON string
reopen_matter_response_instance = ReopenMatterResponse.from_json(json)
# print the JSON string representation of the object
print(ReopenMatterResponse.to_json())

# convert the object into a dict
reopen_matter_response_dict = reopen_matter_response_instance.to_dict()
# create an instance of ReopenMatterResponse from a dict
reopen_matter_response_from_dict = ReopenMatterResponse.from_dict(reopen_matter_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


