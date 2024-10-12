# VersionDetails

Version related details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expiry_date** | **datetime** | Version expiry date. | [optional] 
**status** | **str** | A value indicating whether security update required. | [optional] 
**version** | **str** | The agent version. | [optional] 

## Example

```python
from openapi_client.models.version_details import VersionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of VersionDetails from a JSON string
version_details_instance = VersionDetails.from_json(json)
# print the JSON string representation of the object
print(VersionDetails.to_json())

# convert the object into a dict
version_details_dict = version_details_instance.to_dict()
# create an instance of VersionDetails from a dict
version_details_from_dict = VersionDetails.from_dict(version_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


