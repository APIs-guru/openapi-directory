# ClassificationCategory

Represents a category returned from the text classifier.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confidence** | **float** | The classifier&#39;s confidence of the category. Number represents how certain the classifier is that this category represents the given text. | [optional] 
**name** | **str** | The name of the category representing the document. | [optional] 

## Example

```python
from openapi_client.models.classification_category import ClassificationCategory

# TODO update the JSON string below
json = "{}"
# create an instance of ClassificationCategory from a JSON string
classification_category_instance = ClassificationCategory.from_json(json)
# print the JSON string representation of the object
print(ClassificationCategory.to_json())

# convert the object into a dict
classification_category_dict = classification_category_instance.to_dict()
# create an instance of ClassificationCategory from a dict
classification_category_from_dict = ClassificationCategory.from_dict(classification_category_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


