# UserDataMapping

Maps a resource to the associated user and Attributes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**archive_time** | **str** | Output only. Indicates the time when this mapping was archived. | [optional] [readonly] 
**archived** | **bool** | Output only. Indicates whether this mapping is archived. | [optional] [readonly] 
**data_id** | **str** | Required. A unique identifier for the mapped resource. | [optional] 
**name** | **str** | Resource name of the User data mapping, of the form &#x60;projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/consentStores/{consent_store_id}/userDataMappings/{user_data_mapping_id}&#x60;. | [optional] 
**resource_attributes** | [**List[Attribute]**](Attribute.md) | Attributes of the resource. Only explicitly set attributes are displayed here. Attribute definitions with defaults set implicitly apply to these User data mappings. Attributes listed here must be single valued, that is, exactly one value is specified for the field \&quot;values\&quot; in each Attribute. | [optional] 
**user_id** | **str** | Required. User&#39;s UUID provided by the client. | [optional] 

## Example

```python
from openapi_client.models.user_data_mapping import UserDataMapping

# TODO update the JSON string below
json = "{}"
# create an instance of UserDataMapping from a JSON string
user_data_mapping_instance = UserDataMapping.from_json(json)
# print the JSON string representation of the object
print(UserDataMapping.to_json())

# convert the object into a dict
user_data_mapping_dict = user_data_mapping_instance.to_dict()
# create an instance of UserDataMapping from a dict
user_data_mapping_from_dict = UserDataMapping.from_dict(user_data_mapping_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


