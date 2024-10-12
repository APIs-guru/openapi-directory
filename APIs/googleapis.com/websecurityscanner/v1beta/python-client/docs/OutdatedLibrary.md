# OutdatedLibrary

Information reported for an outdated library.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**learn_more_urls** | **List[str]** | URLs to learn more information about the vulnerabilities in the library. | [optional] 
**library_name** | **str** | The name of the outdated library. | [optional] 
**version** | **str** | The version number. | [optional] 

## Example

```python
from openapi_client.models.outdated_library import OutdatedLibrary

# TODO update the JSON string below
json = "{}"
# create an instance of OutdatedLibrary from a JSON string
outdated_library_instance = OutdatedLibrary.from_json(json)
# print the JSON string representation of the object
print(OutdatedLibrary.to_json())

# convert the object into a dict
outdated_library_dict = outdated_library_instance.to_dict()
# create an instance of OutdatedLibrary from a dict
outdated_library_from_dict = OutdatedLibrary.from_dict(outdated_library_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


