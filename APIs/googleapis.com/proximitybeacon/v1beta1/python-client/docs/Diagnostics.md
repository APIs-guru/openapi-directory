# Diagnostics

Diagnostics for a single beacon.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alerts** | **List[str]** | An unordered list of Alerts that the beacon has. | [optional] 
**beacon_name** | **str** | Resource name of the beacon. For Eddystone-EID beacons, this may be the beacon&#39;s current EID, or the beacon&#39;s \&quot;stable\&quot; Eddystone-UID. | [optional] 
**estimated_low_battery_date** | [**ModelDate**](ModelDate.md) |  | [optional] 

## Example

```python
from openapi_client.models.diagnostics import Diagnostics

# TODO update the JSON string below
json = "{}"
# create an instance of Diagnostics from a JSON string
diagnostics_instance = Diagnostics.from_json(json)
# print the JSON string representation of the object
print(Diagnostics.to_json())

# convert the object into a dict
diagnostics_dict = diagnostics_instance.to_dict()
# create an instance of Diagnostics from a dict
diagnostics_from_dict = Diagnostics.from_dict(diagnostics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


