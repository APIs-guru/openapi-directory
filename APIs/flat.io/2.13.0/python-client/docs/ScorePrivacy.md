# ScorePrivacy

The score main privacy mode.  - `public`: The score is public on the Internet. This one can be accessible at the url `https://flat.io/score/{score}` and can be modified and administred by specified collaborators users. - `private`: The score is private and can be only accessed, modified and administred by specified collaborators users. - `privateLink`: The score is private but can be accessed using a private link `htmlUrl` or the private key in the property `sharingKey`. - `organizationPublic`: _Available only with [Flat for Education](https://flat.io/edu)._ The score is public in the organization: users of the same organization can access to this one. The score can be modified and administred by specified collaborators users.  The score can also be individually shared to a set of users or groups using the different collaborators API methods.  When a file is synchronized from an external source (e.g. Google Drive) and the sharing options are changed on the source, Flat will chose the best privacy mode for the file.  When using a [Flat for Education](https://flat.io/edu) account, some of the modes may not be available if disabled by an administrator of the organization (e.g. by default the `public` mode is not available). 

## Enum

* `PUBLIC` (value: `'public'`)

* `PRIVATE` (value: `'private'`)

* `ORGANIZATIONPUBLIC` (value: `'organizationPublic'`)

* `PRIVATELINK` (value: `'privateLink'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


