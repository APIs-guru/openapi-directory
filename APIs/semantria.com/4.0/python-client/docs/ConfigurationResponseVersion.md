# ConfigurationResponseVersion


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
**from_template_config_id** | **str** | Unique identifier of configuration (template) the current configuration has been clonned from | 
**is_primary** | **bool** | Identifies whether the current configuration is primary or not. Default: false | 
**language** | **str** | Defines target language that will be used for task processing. Default: English | 
**modified** | **str** | The timestamp of the latest update of the record. Creation date of update didn&#39;t occur | 
**name** | **str** | Configuration name | 
**one_sentence** | **bool** | Leads the service to consider the entire document as single sentence. Default: false | 
**process_html** | **bool** | Leads the service to clean HTML tags before processing. Default: false | 
**version** | **str** | Version of the vertical pack, for versioning purposes | 

## Example

```python
from openapi_client.models.configuration_response_version import ConfigurationResponseVersion

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigurationResponseVersion from a JSON string
configuration_response_version_instance = ConfigurationResponseVersion.from_json(json)
# print the JSON string representation of the object
print(ConfigurationResponseVersion.to_json())

# convert the object into a dict
configuration_response_version_dict = configuration_response_version_instance.to_dict()
# create an instance of ConfigurationResponseVersion from a dict
configuration_response_version_from_dict = ConfigurationResponseVersion.from_dict(configuration_response_version_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


