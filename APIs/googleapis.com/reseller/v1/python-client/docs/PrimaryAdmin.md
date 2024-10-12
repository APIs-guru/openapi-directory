# PrimaryAdmin

JSON template for primary admin in case of TEAM customers

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**primary_email** | **str** | The business email of the primary administrator of the customer. The email verification link is sent to this email address at the time of customer creation. Primary administrators have access to the customer&#39;s Admin Console, including the ability to invite and evict users and manage the administrative needs of the customer. | [optional] 

## Example

```python
from openapi_client.models.primary_admin import PrimaryAdmin

# TODO update the JSON string below
json = "{}"
# create an instance of PrimaryAdmin from a JSON string
primary_admin_instance = PrimaryAdmin.from_json(json)
# print the JSON string representation of the object
print(PrimaryAdmin.to_json())

# convert the object into a dict
primary_admin_dict = primary_admin_instance.to_dict()
# create an instance of PrimaryAdmin from a dict
primary_admin_from_dict = PrimaryAdmin.from_dict(primary_admin_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


