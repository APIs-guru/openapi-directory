# SBOMStatus

The status of an SBOM generation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | **str** | If there was an error generating an SBOM, this will indicate what that error was. | [optional] 
**sbom_state** | **str** | The progress of the SBOM generation. | [optional] 

## Example

```python
from openapi_client.models.sbom_status import SBOMStatus

# TODO update the JSON string below
json = "{}"
# create an instance of SBOMStatus from a JSON string
sbom_status_instance = SBOMStatus.from_json(json)
# print the JSON string representation of the object
print(SBOMStatus.to_json())

# convert the object into a dict
sbom_status_dict = sbom_status_instance.to_dict()
# create an instance of SBOMStatus from a dict
sbom_status_from_dict = SBOMStatus.from_dict(sbom_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


