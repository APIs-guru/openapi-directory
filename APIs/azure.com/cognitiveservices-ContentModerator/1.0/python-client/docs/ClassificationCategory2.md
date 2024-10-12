# ClassificationCategory2

The category2 score details of the text. <a href=\"https://aka.ms/textClassifyCategories\">Click here</a> for more details on category classification.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**score** | **float** | The category2 score. | [optional] 

## Example

```python
from openapi_client.models.classification_category2 import ClassificationCategory2

# TODO update the JSON string below
json = "{}"
# create an instance of ClassificationCategory2 from a JSON string
classification_category2_instance = ClassificationCategory2.from_json(json)
# print the JSON string representation of the object
print(ClassificationCategory2.to_json())

# convert the object into a dict
classification_category2_dict = classification_category2_instance.to_dict()
# create an instance of ClassificationCategory2 from a dict
classification_category2_from_dict = ClassificationCategory2.from_dict(classification_category2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


