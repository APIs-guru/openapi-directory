# DataSubjectRightCustomerIdRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_subject_identifier** | **str** | customer account id (b2c identifier) / customer user id (free form text) depending on the value of the fied &#x60;type&#x60; | [optional] 
**type** | **str** | type of the customer dataSubjectIdentifier | [optional] 

## Example

```python
from openapi_client.models.data_subject_right_customer_id_request import DataSubjectRightCustomerIdRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DataSubjectRightCustomerIdRequest from a JSON string
data_subject_right_customer_id_request_instance = DataSubjectRightCustomerIdRequest.from_json(json)
# print the JSON string representation of the object
print(DataSubjectRightCustomerIdRequest.to_json())

# convert the object into a dict
data_subject_right_customer_id_request_dict = data_subject_right_customer_id_request_instance.to_dict()
# create an instance of DataSubjectRightCustomerIdRequest from a dict
data_subject_right_customer_id_request_from_dict = DataSubjectRightCustomerIdRequest.from_dict(data_subject_right_customer_id_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


