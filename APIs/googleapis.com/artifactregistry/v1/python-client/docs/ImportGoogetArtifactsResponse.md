# ImportGoogetArtifactsResponse

The response message from importing artifacts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**List[ImportGoogetArtifactsErrorInfo]**](ImportGoogetArtifactsErrorInfo.md) | Detailed error info for packages that were not imported. | [optional] 
**googet_artifacts** | [**List[GoogetArtifact]**](GoogetArtifact.md) | The GooGet artifacts updated. | [optional] 

## Example

```python
from openapi_client.models.import_googet_artifacts_response import ImportGoogetArtifactsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ImportGoogetArtifactsResponse from a JSON string
import_googet_artifacts_response_instance = ImportGoogetArtifactsResponse.from_json(json)
# print the JSON string representation of the object
print(ImportGoogetArtifactsResponse.to_json())

# convert the object into a dict
import_googet_artifacts_response_dict = import_googet_artifacts_response_instance.to_dict()
# create an instance of ImportGoogetArtifactsResponse from a dict
import_googet_artifacts_response_from_dict = ImportGoogetArtifactsResponse.from_dict(import_googet_artifacts_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


