# UpdateInstallProgress

Class representing the progress during installation of updates

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**number_of_updates_installed** | **int** | Number of updates installed. | [optional] 
**number_of_updates_to_install** | **int** | Number of updates to install. | [optional] 
**percent_complete** | **int** | Percentage of completion. | [optional] 

## Example

```python
from openapi_client.models.update_install_progress import UpdateInstallProgress

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateInstallProgress from a JSON string
update_install_progress_instance = UpdateInstallProgress.from_json(json)
# print the JSON string representation of the object
print(UpdateInstallProgress.to_json())

# convert the object into a dict
update_install_progress_dict = update_install_progress_instance.to_dict()
# create an instance of UpdateInstallProgress from a dict
update_install_progress_from_dict = UpdateInstallProgress.from_dict(update_install_progress_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


