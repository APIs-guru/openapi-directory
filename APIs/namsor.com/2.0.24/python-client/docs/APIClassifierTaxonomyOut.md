# APIClassifierTaxonomyOut


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**classifier_name** | **str** | Name of the classifier as per apiStatus (corresponds also to the name of the service in apiServices) | [optional] 
**classifying_scripts** | **List[str]** | The scripts / alphabets this classifiers classifies to | [optional] 
**taxonomy_classes** | **List[str]** | The taxonomy classes this classifier classifies to | [optional] 

## Example

```python
from openapi_client.models.api_classifier_taxonomy_out import APIClassifierTaxonomyOut

# TODO update the JSON string below
json = "{}"
# create an instance of APIClassifierTaxonomyOut from a JSON string
api_classifier_taxonomy_out_instance = APIClassifierTaxonomyOut.from_json(json)
# print the JSON string representation of the object
print(APIClassifierTaxonomyOut.to_json())

# convert the object into a dict
api_classifier_taxonomy_out_dict = api_classifier_taxonomy_out_instance.to_dict()
# create an instance of APIClassifierTaxonomyOut from a dict
api_classifier_taxonomy_out_from_dict = APIClassifierTaxonomyOut.from_dict(api_classifier_taxonomy_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


