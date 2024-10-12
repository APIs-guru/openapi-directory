# GoogleFactcheckingFactchecktoolsV1alpha1Publisher

Information about the publisher.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of this publisher. For instance, \&quot;Awesome Fact Checks\&quot;. | [optional] 
**site** | **str** | Host-level site name, without the protocol or \&quot;www\&quot; prefix. For instance, \&quot;awesomefactchecks.com\&quot;. This value of this field is based purely on the claim review URL. | [optional] 

## Example

```python
from openapi_client.models.google_factchecking_factchecktools_v1alpha1_publisher import GoogleFactcheckingFactchecktoolsV1alpha1Publisher

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFactcheckingFactchecktoolsV1alpha1Publisher from a JSON string
google_factchecking_factchecktools_v1alpha1_publisher_instance = GoogleFactcheckingFactchecktoolsV1alpha1Publisher.from_json(json)
# print the JSON string representation of the object
print(GoogleFactcheckingFactchecktoolsV1alpha1Publisher.to_json())

# convert the object into a dict
google_factchecking_factchecktools_v1alpha1_publisher_dict = google_factchecking_factchecktools_v1alpha1_publisher_instance.to_dict()
# create an instance of GoogleFactcheckingFactchecktoolsV1alpha1Publisher from a dict
google_factchecking_factchecktools_v1alpha1_publisher_from_dict = GoogleFactcheckingFactchecktoolsV1alpha1Publisher.from_dict(google_factchecking_factchecktools_v1alpha1_publisher_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


