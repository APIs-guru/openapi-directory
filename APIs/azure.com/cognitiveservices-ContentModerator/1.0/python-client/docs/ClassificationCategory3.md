# ClassificationCategory3

The category3 score details of the text. <a href=\"https://aka.ms/textClassifyCategories\">Click here</a> for more details on category classification.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**score** | **float** | The category3 score. | [optional] 

## Example

```python
from openapi_client.models.classification_category3 import ClassificationCategory3

# TODO update the JSON string below
json = "{}"
# create an instance of ClassificationCategory3 from a JSON string
classification_category3_instance = ClassificationCategory3.from_json(json)
# print the JSON string representation of the object
print(ClassificationCategory3.to_json())

# convert the object into a dict
classification_category3_dict = classification_category3_instance.to_dict()
# create an instance of ClassificationCategory3 from a dict
classification_category3_from_dict = ClassificationCategory3.from_dict(classification_category3_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


