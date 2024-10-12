# ImportImageParameters


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mode** | **str** | When Force, any existing target tags will be overwritten. When NoForce, any existing target tags will fail the operation before any copying begins. | [optional] [default to 'NoForce']
**source** | [**ImportSource**](ImportSource.md) |  | 
**target_tags** | **List[str]** | List of strings of the form repo[:tag]. When tag is omitted the source will be used (or &#39;latest&#39; if source tag is also omitted). | [optional] 
**untagged_target_repositories** | **List[str]** | List of strings of repository names to do a manifest only copy. No tag will be created. | [optional] 

## Example

```python
from openapi_client.models.import_image_parameters import ImportImageParameters

# TODO update the JSON string below
json = "{}"
# create an instance of ImportImageParameters from a JSON string
import_image_parameters_instance = ImportImageParameters.from_json(json)
# print the JSON string representation of the object
print(ImportImageParameters.to_json())

# convert the object into a dict
import_image_parameters_dict = import_image_parameters_instance.to_dict()
# create an instance of ImportImageParameters from a dict
import_image_parameters_from_dict = ImportImageParameters.from_dict(import_image_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


