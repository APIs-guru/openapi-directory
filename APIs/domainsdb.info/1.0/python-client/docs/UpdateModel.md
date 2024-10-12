# UpdateModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**added** | **str** | Updates added list | [optional] 
**added_download** | **str** | Download link for added | [optional] 
**var_date** | **str** | Update date | [optional] 
**deleted** | **str** | Updates deleted list | [optional] 
**deleted_download** | **str** | Download link for deleted | [optional] 

## Example

```python
from openapi_client.models.update_model import UpdateModel

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateModel from a JSON string
update_model_instance = UpdateModel.from_json(json)
# print the JSON string representation of the object
print(UpdateModel.to_json())

# convert the object into a dict
update_model_dict = update_model_instance.to_dict()
# create an instance of UpdateModel from a dict
update_model_from_dict = UpdateModel.from_dict(update_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


