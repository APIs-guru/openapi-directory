import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ActionTypeEnum } from "./actiontypeenum";


// Permission
/** 
 * Permissions designate which private CA actions can be performed by an AWS service or entity. In order for ACM to automatically renew private certificates, you must give the ACM service principal all available permissions (<code>IssueCertificate</code>, <code>GetCertificate</code>, and <code>ListPermissions</code>). Permissions can be assigned with the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_CreatePermission.html">CreatePermission</a> action, removed with the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_DeletePermission.html">DeletePermission</a> action, and listed with the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_ListPermissions.html">ListPermissions</a> action.
**/
export class Permission extends SpeakeasyBase {
  @Metadata({ data: "json, name=Actions" })
  actions?: ActionTypeEnum[];

  @Metadata({ data: "json, name=CertificateAuthorityArn" })
  certificateAuthorityArn?: string;

  @Metadata({ data: "json, name=CreatedAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=Policy" })
  policy?: string;

  @Metadata({ data: "json, name=Principal" })
  principal?: string;

  @Metadata({ data: "json, name=SourceAccount" })
  sourceAccount?: string;
}
