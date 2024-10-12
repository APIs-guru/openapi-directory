# BoardsMemberships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**member_fields** | **str** | all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username | [optional] 
**type** | **str** | One of: admin, normal or observer | [optional] 

## Example

```python
from openapi_client.models.boards_memberships import BoardsMemberships

# TODO update the JSON string below
json = "{}"
# create an instance of BoardsMemberships from a JSON string
boards_memberships_instance = BoardsMemberships.from_json(json)
# print the JSON string representation of the object
print(BoardsMemberships.to_json())

# convert the object into a dict
boards_memberships_dict = boards_memberships_instance.to_dict()
# create an instance of BoardsMemberships from a dict
boards_memberships_from_dict = BoardsMemberships.from_dict(boards_memberships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


