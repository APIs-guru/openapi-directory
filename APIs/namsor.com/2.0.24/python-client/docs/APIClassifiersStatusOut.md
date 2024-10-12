# APIClassifiersStatusOut


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**classifiers** | [**List[APIClassifierOut]**](APIClassifierOut.md) | The list of classifiers and versions. | [optional] 
**software_version** | [**SoftwareVersionOut**](SoftwareVersionOut.md) |  | [optional] 

## Example

```python
from openapi_client.models.api_classifiers_status_out import APIClassifiersStatusOut

# TODO update the JSON string below
json = "{}"
# create an instance of APIClassifiersStatusOut from a JSON string
api_classifiers_status_out_instance = APIClassifiersStatusOut.from_json(json)
# print the JSON string representation of the object
print(APIClassifiersStatusOut.to_json())

# convert the object into a dict
api_classifiers_status_out_dict = api_classifiers_status_out_instance.to_dict()
# create an instance of APIClassifiersStatusOut from a dict
api_classifiers_status_out_from_dict = APIClassifiersStatusOut.from_dict(api_classifiers_status_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


