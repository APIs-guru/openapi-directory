# SeriesEntity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contract** | [**SeriesEntityContract**](SeriesEntityContract.md) |  | [optional] 
**costing_capacity** | **int** | Value of the costing capacity. | [optional] 
**creation_timestamp** | **int** | Timestamp for when the series was created in the customer&#39;s database. | 
**first_date** | **date** | Date of the first event in the series. | 
**id** | **int** | Unique ID of the series. | 
**label** | **str** | Label of the series. | 
**last_date** | **date** | Date of the last event in the series. | 
**last_update_timestamp** | **int** | Timestamp for when the series was last updated in the customer&#39;s database. | 
**type** | [**SeriesEntityType**](SeriesEntityType.md) |  | 
**venue** | [**VenuesEntity**](VenuesEntity.md) |  | [optional] 

## Example

```python
from openapi_client.models.series_entity import SeriesEntity

# TODO update the JSON string below
json = "{}"
# create an instance of SeriesEntity from a JSON string
series_entity_instance = SeriesEntity.from_json(json)
# print the JSON string representation of the object
print(SeriesEntity.to_json())

# convert the object into a dict
series_entity_dict = series_entity_instance.to_dict()
# create an instance of SeriesEntity from a dict
series_entity_from_dict = SeriesEntity.from_dict(series_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


