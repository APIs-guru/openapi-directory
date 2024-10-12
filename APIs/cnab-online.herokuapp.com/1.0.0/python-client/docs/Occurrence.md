# Occurrence


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**OccurrenceAttributes**](OccurrenceAttributes.md) |  | [optional] 
**id** | **int** | Posição da ocorrência em relação às outras ocorrências processadas neste mesmo arquivo | [optional] 
**type** | **str** | Sempre &#39;occurrences&#39; para seguir a especificação JSON API | [optional] 

## Example

```python
from openapi_client.models.occurrence import Occurrence

# TODO update the JSON string below
json = "{}"
# create an instance of Occurrence from a JSON string
occurrence_instance = Occurrence.from_json(json)
# print the JSON string representation of the object
print(Occurrence.to_json())

# convert the object into a dict
occurrence_dict = occurrence_instance.to_dict()
# create an instance of Occurrence from a dict
occurrence_from_dict = Occurrence.from_dict(occurrence_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


