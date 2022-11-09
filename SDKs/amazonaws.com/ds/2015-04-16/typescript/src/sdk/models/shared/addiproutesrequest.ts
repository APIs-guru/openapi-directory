import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { IpRoute } from "./iproute";


export class AddIpRoutesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DirectoryId" })
  directoryId: string;

  @Metadata({ data: "json, name=IpRoutes", elemType: shared.IpRoute })
  ipRoutes: IpRoute[];

  @Metadata({ data: "json, name=UpdateSecurityGroupForDirectoryControllers" })
  updateSecurityGroupForDirectoryControllers?: boolean;
}
