# ConfigurationUpdateVersion


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_response** | **bool** | Defines whether or not the service should respond with processed results automatically. Default: false | 
**callback** | **str** | Defines a callback URL for automatic data responding | 
**categories_threshold** | **float** | Defines low threshold for strength score of user categories to be reported in the output. Default: 0.45 | 
**chars_threshold** | **int** | Defines the threshold for alphanumeric characters in the text in percent. Default: 80 | 
**collection** | [**ConfigurationCollectionSection**](ConfigurationCollectionSection.md) |  | 
**config_id** | **str** | Unique configuration identifier | 
**document** | [**ConfigurationDocumentSection**](ConfigurationDocumentSection.md) |  | 
**entities_threshold** | **int** | Defines low threshold for evidence score of named and user entities to be reported in the output. Default: 55 | 
**is_primary** | **bool** | Identifies whether the current configuration is primary or not. Default: false | 
**language** | **str** | Defines target language that will be used for task processing. Default: English | 
**name** | **str** | Configuration name | 
**one_sentence** | **bool** | Leads the service to consider the entire document as single sentence. Default: false | 
**process_html** | **bool** | Leads the service to clean HTML tags before processing. Default: false | 

## Example

```python
from openapi_client.models.configuration_update_version import ConfigurationUpdateVersion

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigurationUpdateVersion from a JSON string
configuration_update_version_instance = ConfigurationUpdateVersion.from_json(json)
# print the JSON string representation of the object
print(ConfigurationUpdateVersion.to_json())

# convert the object into a dict
configuration_update_version_dict = configuration_update_version_instance.to_dict()
# create an instance of ConfigurationUpdateVersion from a dict
configuration_update_version_from_dict = ConfigurationUpdateVersion.from_dict(configuration_update_version_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


