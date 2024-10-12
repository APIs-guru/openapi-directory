# BucketBilling

The bucket's billing configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requester_pays** | **bool** | When set to true, Requester Pays is enabled for this bucket. | [optional] 

## Example

```python
from openapi_client.models.bucket_billing import BucketBilling

# TODO update the JSON string below
json = "{}"
# create an instance of BucketBilling from a JSON string
bucket_billing_instance = BucketBilling.from_json(json)
# print the JSON string representation of the object
print(BucketBilling.to_json())

# convert the object into a dict
bucket_billing_dict = bucket_billing_instance.to_dict()
# create an instance of BucketBilling from a dict
bucket_billing_from_dict = BucketBilling.from_dict(bucket_billing_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


