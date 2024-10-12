# QOD


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**author** | **str** | Author name of quote. | [optional] 
**quote** | **str** | The Quote. | 
**tags** | **List[str]** | Array of tags/categories. | [optional] 
**id** | **str** | Unique identifier representing a specific quote in theysaidso.com. | 
**image** | **str** | Image URL that can be used for background to display this quote. | [optional] 
**length** | **int** | Length of the quote string. | [optional] 
**var_date** | **str** | Date this quote of the day belongs to | 
**title** | **str** | Title of the QOD category | [optional] 

## Example

```python
from openapi_client.models.qod import QOD

# TODO update the JSON string below
json = "{}"
# create an instance of QOD from a JSON string
qod_instance = QOD.from_json(json)
# print the JSON string representation of the object
print(QOD.to_json())

# convert the object into a dict
qod_dict = qod_instance.to_dict()
# create an instance of QOD from a dict
qod_from_dict = QOD.from_dict(qod_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


