# LabelDownloadType

There are two different ways to [download a label](https://www.shipengine.com/docs/labels/downloading/):  |Label Download Type | Description |--------------------|------------------------------ |`url`               |You will receive a URL, which you can use to download the label in a separate request. The URL will remain valid for 90 days.<br><br>This is the default if `label_download_type` is unspecified. |`inline`            |You will receive the Base64-encoded label as part of the response. No need for a second request to download the label. 

## Enum

* `URL` (value: `'url'`)

* `INLINE` (value: `'inline'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


