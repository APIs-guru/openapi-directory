# ImportYumArtifactsResponse

The response message from importing YUM artifacts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**List[ImportYumArtifactsErrorInfo]**](ImportYumArtifactsErrorInfo.md) | Detailed error info for packages that were not imported. | [optional] 
**yum_artifacts** | [**List[YumArtifact]**](YumArtifact.md) | The yum artifacts imported. | [optional] 

## Example

```python
from openapi_client.models.import_yum_artifacts_response import ImportYumArtifactsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ImportYumArtifactsResponse from a JSON string
import_yum_artifacts_response_instance = ImportYumArtifactsResponse.from_json(json)
# print the JSON string representation of the object
print(ImportYumArtifactsResponse.to_json())

# convert the object into a dict
import_yum_artifacts_response_dict = import_yum_artifacts_response_instance.to_dict()
# create an instance of ImportYumArtifactsResponse from a dict
import_yum_artifacts_response_from_dict = ImportYumArtifactsResponse.from_dict(import_yum_artifacts_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


