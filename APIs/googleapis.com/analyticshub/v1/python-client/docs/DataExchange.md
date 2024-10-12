# DataExchange

A data exchange is a container that lets you share data. Along with the descriptive information about the data exchange, it contains listings that reference shared datasets.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Optional. Description of the data exchange. The description must not contain Unicode non-characters as well as C0 and C1 control codes except tabs (HT), new lines (LF), carriage returns (CR), and page breaks (FF). Default value is an empty string. Max length: 2000 bytes. | [optional] 
**display_name** | **str** | Required. Human-readable display name of the data exchange. The display name must contain only Unicode letters, numbers (0-9), underscores (_), dashes (-), spaces ( ), ampersands (&amp;) and must not start or end with spaces. Default value is an empty string. Max length: 63 bytes. | [optional] 
**documentation** | **str** | Optional. Documentation describing the data exchange. | [optional] 
**icon** | **bytearray** | Optional. Base64 encoded image representing the data exchange. Max Size: 3.0MiB Expected image dimensions are 512x512 pixels, however the API only performs validation on size of the encoded data. Note: For byte fields, the content of the fields are base64-encoded (which increases the size of the data by 33-36%) when using JSON on the wire. | [optional] 
**listing_count** | **int** | Output only. Number of listings contained in the data exchange. | [optional] [readonly] 
**name** | **str** | Output only. The resource name of the data exchange. e.g. &#x60;projects/myproject/locations/US/dataExchanges/123&#x60;. | [optional] [readonly] 
**primary_contact** | **str** | Optional. Email or URL of the primary point of contact of the data exchange. Max Length: 1000 bytes. | [optional] 
**sharing_environment_config** | [**SharingEnvironmentConfig**](SharingEnvironmentConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.data_exchange import DataExchange

# TODO update the JSON string below
json = "{}"
# create an instance of DataExchange from a JSON string
data_exchange_instance = DataExchange.from_json(json)
# print the JSON string representation of the object
print(DataExchange.to_json())

# convert the object into a dict
data_exchange_dict = data_exchange_instance.to_dict()
# create an instance of DataExchange from a dict
data_exchange_from_dict = DataExchange.from_dict(data_exchange_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


