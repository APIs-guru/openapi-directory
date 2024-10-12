# CheckUpgradeResponse

Message containing information about the result of an upgrade check operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**build_log_uri** | **str** | Output only. Url for a docker build log of an upgraded image. | [optional] [readonly] 
**contains_pypi_modules_conflict** | **str** | Output only. Whether build has succeeded or failed on modules conflicts. | [optional] [readonly] 
**image_version** | **str** | Composer image for which the build was happening. | [optional] 
**pypi_conflict_build_log_extract** | **str** | Output only. Extract from a docker image build log containing information about pypi modules conflicts. | [optional] [readonly] 
**pypi_dependencies** | **Dict[str, str]** | Pypi dependencies specified in the environment configuration, at the time when the build was triggered. | [optional] 

## Example

```python
from openapi_client.models.check_upgrade_response import CheckUpgradeResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CheckUpgradeResponse from a JSON string
check_upgrade_response_instance = CheckUpgradeResponse.from_json(json)
# print the JSON string representation of the object
print(CheckUpgradeResponse.to_json())

# convert the object into a dict
check_upgrade_response_dict = check_upgrade_response_instance.to_dict()
# create an instance of CheckUpgradeResponse from a dict
check_upgrade_response_from_dict = CheckUpgradeResponse.from_dict(check_upgrade_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


