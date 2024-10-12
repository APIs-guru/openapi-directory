# BMSContainersInquiryQueryObject

The query filters that can be used with the inquire container API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backup_management_type** | **str** | Backup management type for this container. | [optional] 
**workload_type** | **str** | Workload type for this container. | [optional] 

## Example

```python
from openapi_client.models.bms_containers_inquiry_query_object import BMSContainersInquiryQueryObject

# TODO update the JSON string below
json = "{}"
# create an instance of BMSContainersInquiryQueryObject from a JSON string
bms_containers_inquiry_query_object_instance = BMSContainersInquiryQueryObject.from_json(json)
# print the JSON string representation of the object
print(BMSContainersInquiryQueryObject.to_json())

# convert the object into a dict
bms_containers_inquiry_query_object_dict = bms_containers_inquiry_query_object_instance.to_dict()
# create an instance of BMSContainersInquiryQueryObject from a dict
bms_containers_inquiry_query_object_from_dict = BMSContainersInquiryQueryObject.from_dict(bms_containers_inquiry_query_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


