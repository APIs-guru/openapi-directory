# SeriesEntityType

Type of the series

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | String identifying the series type. | 
**label** | **str** | Label of the series type. This value is translated according to the &#39;Accept-Language&#39; header. | 

## Example

```python
from openapi_client.models.series_entity_type import SeriesEntityType

# TODO update the JSON string below
json = "{}"
# create an instance of SeriesEntityType from a JSON string
series_entity_type_instance = SeriesEntityType.from_json(json)
# print the JSON string representation of the object
print(SeriesEntityType.to_json())

# convert the object into a dict
series_entity_type_dict = series_entity_type_instance.to_dict()
# create an instance of SeriesEntityType from a dict
series_entity_type_from_dict = SeriesEntityType.from_dict(series_entity_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


