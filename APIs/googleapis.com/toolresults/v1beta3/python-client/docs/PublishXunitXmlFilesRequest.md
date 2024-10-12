# PublishXunitXmlFilesRequest

Request message for StepService.PublishXunitXmlFiles.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**xunit_xml_files** | [**List[FileReference]**](FileReference.md) | URI of the Xunit XML files to publish. The maximum size of the file this reference is pointing to is 50MB. Required. | [optional] 

## Example

```python
from openapi_client.models.publish_xunit_xml_files_request import PublishXunitXmlFilesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PublishXunitXmlFilesRequest from a JSON string
publish_xunit_xml_files_request_instance = PublishXunitXmlFilesRequest.from_json(json)
# print the JSON string representation of the object
print(PublishXunitXmlFilesRequest.to_json())

# convert the object into a dict
publish_xunit_xml_files_request_dict = publish_xunit_xml_files_request_instance.to_dict()
# create an instance of PublishXunitXmlFilesRequest from a dict
publish_xunit_xml_files_request_from_dict = PublishXunitXmlFilesRequest.from_dict(publish_xunit_xml_files_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


