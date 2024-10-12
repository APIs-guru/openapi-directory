# CreateProjectMetadata

A status object which is used as the `metadata` field for the Operation returned by CreateProject. It provides insight for when significant phases of Project creation have completed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Creation time of the project creation workflow. | [optional] 
**gettable** | **bool** | True if the project can be retrieved using &#x60;GetProject&#x60;. No other operations on the project are guaranteed to work until the project creation is complete. | [optional] 
**ready** | **bool** | True if the project creation process is complete. | [optional] 

## Example

```python
from openapi_client.models.create_project_metadata import CreateProjectMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of CreateProjectMetadata from a JSON string
create_project_metadata_instance = CreateProjectMetadata.from_json(json)
# print the JSON string representation of the object
print(CreateProjectMetadata.to_json())

# convert the object into a dict
create_project_metadata_dict = create_project_metadata_instance.to_dict()
# create an instance of CreateProjectMetadata from a dict
create_project_metadata_from_dict = CreateProjectMetadata.from_dict(create_project_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


