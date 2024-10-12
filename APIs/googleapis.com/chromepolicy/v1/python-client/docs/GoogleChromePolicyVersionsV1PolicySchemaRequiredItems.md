# GoogleChromePolicyVersionsV1PolicySchemaRequiredItems

The fields that will become required based on the value of this field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**field_conditions** | **List[str]** | The value(s) of the field that provoke required field enforcement. An empty field_conditions implies that any value assigned to this field will provoke required field enforcement. | [optional] 
**required_fields** | **List[str]** | The fields that are required as a consequence of the field conditions. | [optional] 

## Example

```python
from openapi_client.models.google_chrome_policy_versions_v1_policy_schema_required_items import GoogleChromePolicyVersionsV1PolicySchemaRequiredItems

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromePolicyVersionsV1PolicySchemaRequiredItems from a JSON string
google_chrome_policy_versions_v1_policy_schema_required_items_instance = GoogleChromePolicyVersionsV1PolicySchemaRequiredItems.from_json(json)
# print the JSON string representation of the object
print(GoogleChromePolicyVersionsV1PolicySchemaRequiredItems.to_json())

# convert the object into a dict
google_chrome_policy_versions_v1_policy_schema_required_items_dict = google_chrome_policy_versions_v1_policy_schema_required_items_instance.to_dict()
# create an instance of GoogleChromePolicyVersionsV1PolicySchemaRequiredItems from a dict
google_chrome_policy_versions_v1_policy_schema_required_items_from_dict = GoogleChromePolicyVersionsV1PolicySchemaRequiredItems.from_dict(google_chrome_policy_versions_v1_policy_schema_required_items_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


