# Housekeeping

Conveniences provided in guest units to facilitate an easier, more comfortable stay.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**daily_housekeeping** | **bool** | Daily housekeeping. Guest units are cleaned by hotel staff daily during guest&#39;s stay. | [optional] 
**daily_housekeeping_exception** | **str** | Daily housekeeping exception. | [optional] 
**housekeeping_available** | **bool** | Housekeeping available. Guest units are cleaned by hotel staff during guest&#39;s stay. Schedule may vary from daily, weekly, or specific days of the week. | [optional] 
**housekeeping_available_exception** | **str** | Housekeeping available exception. | [optional] 
**turndown_service** | **bool** | Turndown service. Hotel staff enters guest units to prepare the bed for sleep use. May or may not include some light housekeeping. May or may not include an evening snack or candy. Also known as evening service. | [optional] 
**turndown_service_exception** | **str** | Turndown service exception. | [optional] 

## Example

```python
from openapi_client.models.housekeeping import Housekeeping

# TODO update the JSON string below
json = "{}"
# create an instance of Housekeeping from a JSON string
housekeeping_instance = Housekeeping.from_json(json)
# print the JSON string representation of the object
print(Housekeeping.to_json())

# convert the object into a dict
housekeeping_dict = housekeeping_instance.to_dict()
# create an instance of Housekeeping from a dict
housekeeping_from_dict = Housekeeping.from_dict(housekeeping_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


