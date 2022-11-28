from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class LoginProfile:
    r"""LoginProfile
    <p>Contains the user name and password create date for a user.</p> <p> This data type is used as a response element in the <a>CreateLoginProfile</a> and <a>GetLoginProfile</a> operations. </p>
    """
    
    create_date: datetime = field()
    user_name: str = field()
    password_reset_required: Optional[bool] = field(default=None)
    
