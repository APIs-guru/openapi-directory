# SourceReference

A reference to a particular snapshot of the source tree used to build and deploy an application.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**repository** | **str** | Optional. A URI string identifying the repository. Example: \&quot;https://github.com/GoogleCloudPlatform/kubernetes.git\&quot; | [optional] 
**revision_id** | **str** | The canonical and persistent identifier of the deployed revision. Example (git): \&quot;0035781c50ec7aa23385dc841529ce8a4b70db1b\&quot; | [optional] 

## Example

```python
from openapi_client.models.source_reference import SourceReference

# TODO update the JSON string below
json = "{}"
# create an instance of SourceReference from a JSON string
source_reference_instance = SourceReference.from_json(json)
# print the JSON string representation of the object
print(SourceReference.to_json())

# convert the object into a dict
source_reference_dict = source_reference_instance.to_dict()
# create an instance of SourceReference from a dict
source_reference_from_dict = SourceReference.from_dict(source_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


