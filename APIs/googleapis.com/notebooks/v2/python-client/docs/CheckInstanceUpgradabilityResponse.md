# CheckInstanceUpgradabilityResponse

Response for checking if a notebook instance is upgradeable.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**upgrade_image** | **str** | The new image self link this instance will be upgraded to if calling the upgrade endpoint. This field will only be populated if field upgradeable is true. | [optional] 
**upgrade_info** | **str** | Additional information about upgrade. | [optional] 
**upgrade_version** | **str** | The version this instance will be upgraded to if calling the upgrade endpoint. This field will only be populated if field upgradeable is true. | [optional] 
**upgradeable** | **bool** | If an instance is upgradeable. | [optional] 

## Example

```python
from openapi_client.models.check_instance_upgradability_response import CheckInstanceUpgradabilityResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CheckInstanceUpgradabilityResponse from a JSON string
check_instance_upgradability_response_instance = CheckInstanceUpgradabilityResponse.from_json(json)
# print the JSON string representation of the object
print(CheckInstanceUpgradabilityResponse.to_json())

# convert the object into a dict
check_instance_upgradability_response_dict = check_instance_upgradability_response_instance.to_dict()
# create an instance of CheckInstanceUpgradabilityResponse from a dict
check_instance_upgradability_response_from_dict = CheckInstanceUpgradabilityResponse.from_dict(check_instance_upgradability_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


