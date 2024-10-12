# HttpData

An HttpData resource specifies a list of objects on the web to be transferred over HTTP. The information of the objects to be transferred is contained in a file referenced by a URL. The first line in the file must be `\"TsvHttpData-1.0\"`, which specifies the format of the file. Subsequent lines specify the information of the list of objects, one object per list entry. Each entry has the following tab-delimited fields: * **HTTP URL** — The location of the object. * **Length** — The size of the object in bytes. * **MD5** — The base64-encoded MD5 hash of the object. For an example of a valid TSV file, see [Transferring data from URLs](https://cloud.google.com/storage-transfer/docs/create-url-list). When transferring data based on a URL list, keep the following in mind: * When an object located at `http(s)://hostname:port/` is transferred to a data sink, the name of the object at the data sink is `/`. * If the specified size of an object does not match the actual size of the object fetched, the object is not transferred. * If the specified MD5 does not match the MD5 computed from the transferred bytes, the object transfer fails. * Ensure that each URL you specify is publicly accessible. For example, in Cloud Storage you can [share an object publicly] (/storage/docs/cloud-console#_sharingdata) and get a link to it. * Storage Transfer Service obeys `robots.txt` rules and requires the source HTTP server to support `Range` requests and to return a `Content-Length` header in each response. * ObjectConditions have no effect when filtering objects to transfer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**list_url** | **str** | Required. The URL that points to the file that stores the object list entries. This file must allow public access. Currently, only URLs with HTTP and HTTPS schemes are supported. | [optional] 

## Example

```python
from openapi_client.models.http_data import HttpData

# TODO update the JSON string below
json = "{}"
# create an instance of HttpData from a JSON string
http_data_instance = HttpData.from_json(json)
# print the JSON string representation of the object
print(HttpData.to_json())

# convert the object into a dict
http_data_dict = http_data_instance.to_dict()
# create an instance of HttpData from a dict
http_data_from_dict = HttpData.from_dict(http_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


