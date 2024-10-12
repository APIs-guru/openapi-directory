# ClassificationCategory1

The category1 score details of the text. <a href=\"https://aka.ms/textClassifyCategories\">Click here</a> for more details on category classification.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**score** | **float** | The category1 score. | [optional] 

## Example

```python
from openapi_client.models.classification_category1 import ClassificationCategory1

# TODO update the JSON string below
json = "{}"
# create an instance of ClassificationCategory1 from a JSON string
classification_category1_instance = ClassificationCategory1.from_json(json)
# print the JSON string representation of the object
print(ClassificationCategory1.to_json())

# convert the object into a dict
classification_category1_dict = classification_category1_instance.to_dict()
# create an instance of ClassificationCategory1 from a dict
classification_category1_from_dict = ClassificationCategory1.from_dict(classification_category1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


