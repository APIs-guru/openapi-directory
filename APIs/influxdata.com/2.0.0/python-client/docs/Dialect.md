# Dialect

Dialect are options to change the default CSV output format; https://www.w3.org/TR/2015/REC-tabular-metadata-20151217/#dialect-descriptions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotations** | **List[str]** | https://www.w3.org/TR/2015/REC-tabular-data-model-20151217/#columns | [optional] 
**comment_prefix** | **str** | Character prefixed to comment strings | [optional] [default to '#']
**date_time_format** | **str** | Format of timestamps | [optional] [default to 'RFC3339']
**delimiter** | **str** | Separator between cells; the default is , | [optional] [default to ',']
**header** | **bool** | If true, the results will contain a header row | [optional] [default to True]

## Example

```python
from openapi_client.models.dialect import Dialect

# TODO update the JSON string below
json = "{}"
# create an instance of Dialect from a JSON string
dialect_instance = Dialect.from_json(json)
# print the JSON string representation of the object
print(Dialect.to_json())

# convert the object into a dict
dialect_dict = dialect_instance.to_dict()
# create an instance of Dialect from a dict
dialect_from_dict = Dialect.from_dict(dialect_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


