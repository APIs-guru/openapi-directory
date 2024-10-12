# FormRelationshipsShareData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | ID of the share.  | [optional] 
**type** | **str** | Type is share.  | [optional] 

## Example

```python
from openapi_client.models.form_relationships_share_data import FormRelationshipsShareData

# TODO update the JSON string below
json = "{}"
# create an instance of FormRelationshipsShareData from a JSON string
form_relationships_share_data_instance = FormRelationshipsShareData.from_json(json)
# print the JSON string representation of the object
print(FormRelationshipsShareData.to_json())

# convert the object into a dict
form_relationships_share_data_dict = form_relationships_share_data_instance.to_dict()
# create an instance of FormRelationshipsShareData from a dict
form_relationships_share_data_from_dict = FormRelationshipsShareData.from_dict(form_relationships_share_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


