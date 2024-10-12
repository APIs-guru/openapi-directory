# Impact

Azure service impacted by the service health event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**impacted_regions** | [**List[ImpactedServiceRegion]**](ImpactedServiceRegion.md) | List regions impacted by the service health event. | [optional] 
**impacted_service** | **str** | Impacted service name. | [optional] 

## Example

```python
from openapi_client.models.impact import Impact

# TODO update the JSON string below
json = "{}"
# create an instance of Impact from a JSON string
impact_instance = Impact.from_json(json)
# print the JSON string representation of the object
print(Impact.to_json())

# convert the object into a dict
impact_dict = impact_instance.to_dict()
# create an instance of Impact from a dict
impact_from_dict = Impact.from_dict(impact_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


