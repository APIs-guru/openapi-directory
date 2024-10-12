# ShareProperties

Share property bag.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | Time at which the share was created. | [optional] [readonly] 
**description** | **str** | Share description. | [optional] 
**provisioning_state** | **str** | Gets or sets the provisioning state | [optional] [readonly] 
**share_kind** | **str** | Share kind. | [optional] 
**terms** | **str** | Share terms. | [optional] 
**user_email** | **str** | Email of the user who created the resource | [optional] [readonly] 
**user_name** | **str** | Name of the user who created the resource | [optional] [readonly] 

## Example

```python
from openapi_client.models.share_properties import ShareProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ShareProperties from a JSON string
share_properties_instance = ShareProperties.from_json(json)
# print the JSON string representation of the object
print(ShareProperties.to_json())

# convert the object into a dict
share_properties_dict = share_properties_instance.to_dict()
# create an instance of ShareProperties from a dict
share_properties_from_dict = ShareProperties.from_dict(share_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


