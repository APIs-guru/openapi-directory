# RevokedResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**badge_id** | **str** |  | [optional] 
**badge_url** | **str** |  | [optional] 
**revocation_reason** | **str** |  | [optional] 
**revoked** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.revoked_response import RevokedResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RevokedResponse from a JSON string
revoked_response_instance = RevokedResponse.from_json(json)
# print the JSON string representation of the object
print(RevokedResponse.to_json())

# convert the object into a dict
revoked_response_dict = revoked_response_instance.to_dict()
# create an instance of RevokedResponse from a dict
revoked_response_from_dict = RevokedResponse.from_dict(revoked_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


